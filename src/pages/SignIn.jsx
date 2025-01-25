import { useState } from 'react';
import React from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error(`Error logging in: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Logged in successfully:', data);
        } catch (error) {
            setError(`Error logging in: ${error.message}`);
            console.error('Error logging in:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.header}>Sign In</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#333',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    error: {
        color: '#ff0000',
        textAlign: 'center',
        marginTop: '15px',
    }
};

export default SignIn;
