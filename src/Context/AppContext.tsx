import React, { createContext, useState, ReactNode } from 'react';

export type Post = {
    title: string;
    author: string;
    category: string;
    date: string;
    content: string;
    tags: string[];
}

export interface AppContextProps {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number | null;
    setTotalPages: React.Dispatch<React.SetStateAction<number | null>>;
    fetchBlogPosts: (page: number) => Promise<void>;
    handlePageChange: (page: number) => void;
}

const defaultContextValue: AppContextProps = {
    loading: false,
    setLoading: () => {}, 
    posts: [],
    setPosts: () => {},   
    page: 1,
    setPage: () => {},    
    totalPages: null,
    setTotalPages: () => {},
    fetchBlogPosts: async () => {},
    handlePageChange: () => {}
};

const AppContext = createContext<AppContextProps>(defaultContextValue);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);

    const fetchBlogPosts = async (page: number = 1) => {
        setLoading(true);
        const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
        let url = `${baseUrl}?page=${page}`;
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page: number) => {
        // setPage(page);
        fetchBlogPosts(page);
    };

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };
