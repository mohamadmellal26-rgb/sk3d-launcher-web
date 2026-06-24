import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logIn.css';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                navigate('/'); // التوجيه للصفحة الرئيسية عند النجاح
            } else {
                alert("بيانات الدخول غير صحيحة");
            }
        } catch (error) {
            console.error("خطأ في الاتصال:", error);
        }
    };

    return (
        <form className="login-container" onSubmit={handleSubmit}>
            <h1>Login to sklauncher</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="signin-btn">Sign in</button>
        </form>
    );
}