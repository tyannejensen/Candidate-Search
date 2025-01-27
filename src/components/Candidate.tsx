import type { Candidate } from "../interfaces/Candidate.interface";

export default function Candidate({candidate, addCandidate, rejectCandidate}: {candidate: Candidate, addCandidate: () => void, rejectCandidate: () => void}) {
    
    return (
        <div>
            {/* <pre>
                {JSON.stringify(candidate, null, 2)}
            </pre> */}
            {
                candidate ?          
                <section className="candidate-card">
                    <img src={candidate.avatar_url} />
                    <section>
                        <h2>{candidate.login}</h2>
                        <a href={candidate.html_url} target="_blank" rel="noreferrer">GitHub Profile</a>
                        <p>Location {candidate.location}</p>
                        <p>Email {candidate.email} </p>
                        <p>Company {candidate.company}</p>
                        <p>Bio: {candidate.bio}</p>
                    </section>
                    <section>
                        <button onClick={addCandidate}>Add Candidate</button>
                        <button onClick={rejectCandidate}>Reject Candidate</button>
                    </section>
                </section>
                :
                 <h1>No candidate selected</h1>
            }
        </div>
    );
}