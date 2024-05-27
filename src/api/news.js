import { news, authNews } from '.';

// const props = { page: page.value, itemsPerPage: 6 };

export const getNews = async (props) => {
  try {
    console.log('mews.jsss', props);

    const res = await news.get('/view', {
      params: props,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
// props = { page: 1, itemsPerPage: 6 }
export const getAllNews = async (props) => {
  try {
    const res = await news.get('/view', {
      params: props,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const detailNews = async (newsId) => {
  try {
    const res = await news.get('/detail', {
      params: {
        newsId,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const removeNews = async (newsId, originalPath, thumbnailPath) => {
  try {
    const res = await authNews.post('/remove', {
      newsId,
      originalPath,
      thumbnailPath,
    });

    if (res.data === 0) throw new Error('No data');

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const upsertNews = async (
  newsId,
  title,
  content,
  type,
  fileName,
  file,
  email,
) => {
  try {
    const res = await news.post(
      '/edit',
      {
        newsId,
        title,
        content,
        type,
        fileName,
        file,
        email,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return res;
  } catch (error) {
    throw error;
  }
};
