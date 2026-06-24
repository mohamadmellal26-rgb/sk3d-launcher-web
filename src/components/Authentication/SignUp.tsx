import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logIn.css'; // يمكنك استخدام نفس ملف الـ CSS

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                alert("تم إنشاء الحساب بنجاح!");
                navigate('/'); // التوجيه للرئيسية مباشرة بعد التسجيل
            } else {
                alert("فشل التسجيل، تأكد من البيانات أو أن المستخدم موجود مسبقاً");
            }
        } catch (error) {
            console.error("خطأ في الاتصال:", error);
        }
    };

    return (
        <form className="login-container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            
            <input 
                type="text" placeholder="Username" 
                value={username} onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" placeholder="Password" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button type="submit" className="signin-btn">Sign Up</button>
        </form>
    );
}