import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navega = () => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate('/about');
    };}