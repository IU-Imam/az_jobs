import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // For error handling

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {  // Check if the response is OK
          throw new Error('Failed to fetch jobs');
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data:', error);
        setError('Failed to load job listings. Please try again later.');  // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="bg-teal-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-zinc-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {error ? (
          <div className="text-center text-red-500">{error}</div>  // Display error if any
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
