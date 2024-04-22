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
  slug: '',
  limit: '3',
  offset: '0',

  count_all: 0,
  language: { en: true, kh: false },
  loading: true,

  categories: [],

  info: {},

  isShow: true,
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
    if (slug == '') {
      stringArray.push(`slug=all`)
    } else {
      stringArray.push(`slug=${slug}`)
    }
  }
  if (limit != null && limit.length > 0) {
    if (slug === 'all') {
      stringArray.push(`limit=4`)
    } else {
      stringArray.push(`limit=3`)
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

export const loadMore = createAsyncThunk(`${namespace}/loadMore`, async (obj, { rejectWithValue, getState }) => {
  const { posts, title, year, slug, limit, offset } = getState().baseSlice

  const stringArray = []
  if (title != null && title.length > 0) {
    stringArray.push(`title=${title}`)
  }
  if (year != null && year.length > 0) {
    stringArray.push(`year=${year}`)
  }
  if (slug != null && slug.length > 0) {
    if (slug == '') {
      stringArray.push(`slug=all`)
    } else {
      stringArray.push(`slug=${slug}`)
    }
  }
  if (limit != null && limit.length > 0) {
    if (slug === 'all') {
      stringArray.push(`limit=4`)
    } else {
      stringArray.push(`limit=3`)
    }
  }

  let length = posts.length.toString()
  if (offset != null && offset.length > 0) {
    stringArray.push(`offset=${length}`)
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

export const getCategories = createAsyncThunk(`${namespace}/getCategories`, async (obj, { rejectWithValue }) => {
  return await service
    .getCategories()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const likePost = createAsyncThunk(`${namespace}/likePost`, async (obj, { rejectWithValue }) => {
  return await service
    .likePost(obj)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return rejectWithValue(error)
    })
})

export const getPostDetail = createAsyncThunk(`${namespace}/getPostDetail`, async (obj, { rejectWithValue }) => {
  return await service
    .getPostDetail(obj)
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
    setShow: (state, action) => {
      state.isShow = action.payload
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
      // .addCase(getPosts.pending, (state) => {
      //   state.loading = true
      // })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload.data.posts
        state.offset = state.posts.length.toString()
        state.count_all = payload.data.count_all
        state.loading = false
      })
      // .addCase(getPosts.rejected, (state, { payload }) => {
      //   if (payload.response) {
      //     state.errorMessage = payload.response.statusText
      //     state.errorStatus = payload.response.status
      //   }
      //   state.loading = false
      // })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        let addPosts = payload.data.posts
        state.posts = state.posts.concat(addPosts)
        state.offset = state.posts.length.toString()
        state.count_all = payload.data.count_all
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.data
      })
      .addCase(getPostDetail.fulfilled, (state, { payload }) => {
        state.info = payload.data
      })
      .addCase(likePost.fulfilled, (state, { payload }) => {})
  },
})

const { reducer, actions } = baseSlice

export const { setLanguage, setLoading, setLimit, setOffset, setSlug, setYear, setTitle, setShow } = actions

export default reducer
