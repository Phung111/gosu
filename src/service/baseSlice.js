import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import service from 'service/service'

const namespace = 'baseSlice'

const initialState = {
  home: {},
  life: {},
  world: {},
  news: {},
  allGames: {},

  posts: [],
  title: '',
  year: null,
  slug: 'all',
  limit: '3',
  offset: '0',

  language: { en: true, kh: false },
  loading: true,
}

export const getHome = createAsyncThunk(`${namespace}/getHome`, async (obj, { rejectWithValue }) => {
  return await service
    .getHome()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getLife = createAsyncThunk(`${namespace}/getLife`, async (obj, { rejectWithValue }) => {
  return await service
    .getLife()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getWorld = createAsyncThunk(`${namespace}/getWorld`, async (obj, { rejectWithValue }) => {
  return await service
    .getWorld()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getNews = createAsyncThunk(`${namespace}/getNews`, async (obj, { rejectWithValue }) => {
  return await service
    .getNews()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getAllGames = createAsyncThunk(`${namespace}/getAllGames`, async (obj, { rejectWithValue }) => {
  return await service
    .getAllGames()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getPosts = createAsyncThunk(`${namespace}/getPosts`, async (obj, { rejectWithValue, getState }) => {
  const { title, year, slug, limit, offset } = getState().baseSlice

  const stringArray = []
  if (title != null && title.length > 0) {
    stringArray.push(`title=${title}`)
  }
  if (year != null && year.length > 0) {
    stringArray.push(`year=${year}`)
  }
  if (slug != null && slug.length > 0) {
    stringArray.push(`slug=${slug}`)
  }
  if (limit != null && limit.length > 0) {
    if (slug === 'all') {
      stringArray.push(`limit=4`)
    } else {
      stringArray.push(`limit=${limit}`)
    }
  }
  if (offset != null && offset.length > 0) {
    stringArray.push(`offset=${offset}`)
  }
  const string = stringArray.join('&')

  return await service
    .getPosts(string)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const selectedLanguage = action.payload
      Object.keys(state.language).forEach((key) => {
        state.language[key] = key === selectedLanguage
      })
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setYear: (state, action) => {
      state.year = action.payload
    },
    setSlug: (state, action) => {
      state.slug = action.payload
    },
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setOffset: (state, action) => {
      state.offset = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHome.fulfilled, (state, { payload }) => {
        if (state.home) {
          state.home = payload.data
        }
      })
      .addCase(getLife.fulfilled, (state, { payload }) => {
        state.life = payload.data
      })
      .addCase(getWorld.fulfilled, (state, { payload }) => {
        state.world = payload.data
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.news = payload.data
      })
      .addCase(getAllGames.fulfilled, (state, { payload }) => {
        state.allGames = payload.data
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload.data.posts
      })
  },
})

const { reducer, actions } = baseSlice

export const { setLanguage, setLoading, setLimit, setOffset, setSlug, setYear, setTitle } = actions

export default reducer
