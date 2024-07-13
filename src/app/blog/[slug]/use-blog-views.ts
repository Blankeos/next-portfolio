import { databases } from '@/lib/appwrite-client';
import { Query } from 'appwrite';
import { useEffect, useState } from 'react';

export function useBlogViews(slug: string) {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchViews(slug: string) {
    setLoading(true);

    try {
      const response = await databases.listDocuments(
        'carlos-portfolio-database',
        'views',
        [Query.equal('$id', slug)]
      );
      return response;
    } finally {
      setViews(views);
      setLoading(false);
      return null;
    }
  }

  async function incrementViews(slug: string) {
    const viewsResponse = await databases.listDocuments(
      'carlos-portfolio-database',
      'views',
      [Query.equal('id', slug)]
    );

    // 1. No Document.
    if (viewsResponse.documents.length === 0) {
      const createViewsResponse = await databases.createDocument(
        'carlos-portfolio-database',
        'views',
        slug,
        {
          views: 1,
        }
      );

      setViews(1);
      return;
    }

    // 2 Already exists.
    const updatedViewsResponse = await databases.updateDocument(
      'carlos-portfolio-database',
      'views',
      slug,
      {
        views: viewsResponse.documents[0].views + 1,
      }
    );

    setViews(updatedViewsResponse.views);
  }

  useEffect(() => {
    fetchViews(slug);
  }, []);

  return {
    views,
    fetchViews,
    incrementViews,
  };
}
