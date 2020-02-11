import * as con from './constants';

export const initialState = {
  error: '',
  loading: false,
  isAuthenticated: false,
  registration: {
    step: 1,
    user: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptAgency: false,
      bio: '',
      description: '',
      skills: [],
      bulletin: '',
      officeLocation: '',
      photoUrl: '',
      videoUrl: ''
    },
    company: {
      companyName: '',
      companySize: '',
      postalCode: '',
      address: '',
      country: '',
      city: ''
    }
  }
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case con.AUTH_REQUEST:
      return {
        ...state,
        loading: true
      };

    case con.AUTH_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case con.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case con.SET_ONLINE:
      return {
        ...state,
        isOnline: true
      };

    case con.SET_OFFLINE:
      return {
        ...state,
        isOnline: false
      };

    case con.LOADING_IS_TRUE:
      return {
        ...state,
        loading: true
      };

    case con.LOADING_IS_FALSE:
      return {
        ...state,
        loading: false
      };

    case con.GET_REPORT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case con.GET_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        report: action.payload
      };

    case con.GET_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
