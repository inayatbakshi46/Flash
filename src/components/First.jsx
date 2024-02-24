import React from 'react';
import { Link } from 'react-router-dom';
const First = () => {
    return (
      <div className="mb-4">
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6"> Welcome to Flash, your on-the-go note-taking companion! Effortlessly capture your thoughts, ideas, and to-dos, then access them anytime, anywhere. With Flash, stay organized and never miss a moment of inspiration. Streamline your life with quick and convenient note management at your fingertips. </p>
      <Link className="btn btn-primary" to="/signup">Get Started</Link>
    </div>
  </div>
</div>
      </div>
    );
}

export default First;