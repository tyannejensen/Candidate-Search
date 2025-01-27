import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../components/Candidate';
import { LocalStorageService } from '../services/LocalStorageService';

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null | unknown>(null);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);

  useEffect(() => {
    handleRefreshCandidatesViaGithub();
  }, [])

  const handleRefreshCandidatesViaGithub = async () => {
    try {
      const results = await searchGithub();
      await setSearchResults(results);
      console.log(results);
      console.log(results[candidateIndex], candidateIndex);
      const user = await searchGithubUser(results[candidateIndex].login);
      console.log(user);
      setSelectedUser(user);
  
      // Increment candidateIndex and check if we need to reset it
      setCandidateIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= results.length) {
          determineIfNoCandidatesLeft();
          return 0;
        }
        return newIndex;
      });
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred while searching for candidates');
    }
  };

  const addCandidate = () => {
    if (selectedUser) {
      const candidateList = LocalStorageService.getItem('candidates') || [];
      candidateList.push(selectedUser);
      LocalStorageService.setItem('candidates', candidateList);
      setCandidateIndex(candidateIndex + 1);
      setSelectedUser(searchResults[candidateIndex]);
      determineIfNoCandidatesLeft();
    }
  };

  const rejectCandidate = () => {
    // skip to next candidate
    setCandidateIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= searchResults.length) {
        determineIfNoCandidatesLeft();
        return 0;
      }
      return newIndex;
    });
    setSelectedUser(searchResults[candidateIndex]);
  };
  
  const determineIfAtEndListOfCandidates = () => {
    return candidateIndex >= searchResults.length;
  };
  
  const refreshCandidates = async () => {
    await setCandidateIndex(0);
    console.log('refreshing candidates', candidateIndex);
    handleRefreshCandidatesViaGithub();
  };
  
  const determineIfNoCandidatesLeft = () => {
    const endOfList = determineIfAtEndListOfCandidates();
    console.log('endOfList', endOfList);
    if (endOfList) {
      refreshCandidates();
    }
  };

  return (
  <>
    <h1>CandidateSearch</h1>

    <Candidate addCandidate={addCandidate} rejectCandidate={rejectCandidate} candidate={selectedUser}/>
    {/* <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUser(user)}>{user.login}</button>
          </li>
        ))}
      </ul>
    </div> */}
  </>
  )
};

export default CandidateSearch;

(function() {
  const element = document.getElementById('test');
  if (element) {
    element.innerText = 'Hi';
  }
})();


