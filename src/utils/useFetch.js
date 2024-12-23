import { useState, useEffect } from "react";
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchUrl = await fetch(url);
                const response = await fetchUrl.json();
                if (response) {
                    setData(response);
                }
            } catch (err) {
                setErr(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, err };
}
