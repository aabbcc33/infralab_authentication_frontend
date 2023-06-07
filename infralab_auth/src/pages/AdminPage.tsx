import { useAuth } from '../components/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';

const Adminpage: React.FC = () => {

    const { auth } = useAuth();
    const location = useLocation();

    const [key, setKey] = useState<string|null>('home');

    if (!auth?.roles.includes("teacher")) {
        return <Navigate to="/error" state={{ from: location }}></Navigate>
    }

    const addStudent = () => {

    }

    return (
        <>
            <div className="trending">
                <Tabs activeKey={key!} onSelect={(k) => setKey(k)}>
                    <Tab eventKey={"home"} title="Add student">
                    {key === 'home' && (
                        <button onClick={addStudent} className="button-30" role="button">Add student</button>
                    )}
                    </Tab>
                    <Tab eventKey={"addserver"} title="Add server">
                    {key === 'position' && (
                        <button onClick={addStudent} className="button-30" role="button">Add student</button>
                    )}
                    </Tab>
                    <Tab eventKey={"assignserver"} title="Assign server">
                    {key === 'position' && (
                        <button onClick={addStudent} className="button-30" role="button">Add student</button>
                    )}
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Adminpage;