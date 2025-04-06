"use client";

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Button } from '../ui/button';

type Change = {
  type: 'feature' | 'bugfix' | 'improvement' | 'breaking';
  description: string;
};

type Version = {
  _id: string;
  version: string;
  releaseDate: string;
  changes: Change[];
};

export default function ChangelogPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [latestVersion, setLatestVersion] = useState<Version | null>(null);
  const [hasSeenLatest, setHasSeenLatest] = useState(true);

  useEffect(() => {
    const checkLatestVersion = async () => {
      try {
        const query = groq`*[_type == "version" && isPublished == true] | order(releaseDate desc)[0]`;
        const version = await client.fetch<Version>(query);
        
        if (version) {
          const lastSeenVersion = localStorage.getItem('lastSeenVersion');
          
          if (lastSeenVersion !== version.version) {
            setLatestVersion(version);
            setHasSeenLatest(false);
          }
        }
      } catch (error) {
        console.error('Error fetching latest version:', error);
      }
    };

    checkLatestVersion();
  }, []);

  const handleClose = () => {
    if (latestVersion) {
      localStorage.setItem('lastSeenVersion', latestVersion.version);
    }
    setIsOpen(false);
    setHasSeenLatest(true);
  };

  if (hasSeenLatest) return null;

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="right-4 bottom-4 z-50 fixed bg-black hover:bg-white dark:bg-white dark:hover:bg-black shadow-lg px-4 py-2 rounded text-white hover:text-black dark:hover:text-white dark:text-black cursor-pointer"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            {"What's New"}
          </span>
        </Button>
      )}

      {isOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white dark:bg-black shadow-xl border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl">
                  Version {latestVersion?.version}
                </h2>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {latestVersion?.changes.map((change, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`mr-3 mt-1 rounded-full p-1 ${
                      change.type === 'feature' ? 'bg-green-100 text-green-800' :
                      change.type === 'bugfix' ? 'bg-red-100 text-red-800' :
                      change.type === 'improvement' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {change.type === 'feature' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      )}
                      {change.type === 'bugfix' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      {change.type === 'improvement' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      {change.type === 'breaking' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium capitalize">{change.type}</p>
                      <p className="text-gray-600">{change.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-6">
                <Button
                  onClick={handleClose}
                  className="bg-black hover:bg-white dark:bg-white dark:hover:bg-black shadow-lg px-4 py-2 border rounded text-white hover:text-black dark:hover:text-white dark:text-black cursor-pointer"
                >
                  Got it!
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 