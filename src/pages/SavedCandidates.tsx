import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
import { LocalStorageService } from "../services/LocalStorageService";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  
  const removeCandidate = (candidate: Candidate) => {
    const candidateList = LocalStorageService.getItem('candidates') || [];
    const updatedCandidateList = candidateList.filter((c: Candidate) => c.id !== candidate.id);
    LocalStorageService.setItem('candidates', updatedCandidateList);

    refreshCandidatesFromLocalStorage();
  }

  useEffect(() => {
    refreshCandidatesFromLocalStorage();
  }, []);

  const refreshCandidatesFromLocalStorage = () => {
    // get the list of candidates from local storage 
    setCandidates(LocalStorageService.getItem('candidates') || []);
    // return the list of candidates
  }


  return (
    //create a table that has the following columns: Image, Name, Location, Email, Company, Bio, Reject which has a button that deletes a candidate from the list of candidates in local storage
    <>
      <h1>Saved Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Github URL</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate: Candidate) => (
            <tr key={candidate.login}>
              <td><img className="saved-candidate-image" src={candidate.avatar_url} alt="avatar" /></td>
              <td><a href={candidate.html_url} target="_blank" rel="noreferrer">{candidate.html_url}</a></td>
              <td>{candidate.login}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>
              <td><button onClick={() => removeCandidate(candidate)}>Reject</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
