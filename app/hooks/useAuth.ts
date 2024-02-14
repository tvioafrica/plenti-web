"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');

    if (!token) {
      router.push('/customer_login');
    }
  }, [router]);

  const login = (token:string) => {
    sessionStorage.setItem('accessToken', token);
    // Add any additional login logic here
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    router.push('/customer_login');
    // Add any additional logout logic here
  };

  return { login, logout };
};
