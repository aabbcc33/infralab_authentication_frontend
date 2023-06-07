import { useAuth } from '../components/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import '../css/AdminPage.module.css'

const Adminpage: React.FC = () => {

    const { auth } = useAuth();
    const location = useLocation();

    const [key, setKey] = useState<string|null>('home');

    if (!auth?.roles.includes("")) {
        return <Navigate to="/error" state={{ from: location }}></Navigate>
    }

    const addStudent = () => {

    }

    return (
        <>
            <div className="trending">
                <Tabs activeKey={key!} onSelect={(k) => setKey(k)}>
                    <Tab 
                        eventKey={"home"} 
                        title="Top"
                    >
                    {key === 'home' && (
                        <button onClick={addStudent} className="button-30" role="button">Add student</button>
                    )}
                    </Tab>
                    <Tab eventKey={"position"} title="New">
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