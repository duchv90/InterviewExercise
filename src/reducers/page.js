import * as Constants from '../constants';

const initState = {
  isActiveButtonPage: false,
  isActiveInputPage: false,
  isActiveListPage: false,
  isActiveSliderPage: false,
  isActiveUploadPage: false
}

export default function page(state = initState, action) {
  switch (action.type) {
    case Constants.OPEN_BUTTON_PAGE:
      return { ...state, isActiveButtonPage: true }
    case Constants.CLOSE_BUTTON_PAGE:
      return { ...state, isActiveButtonPage: false }
    case Constants.OPEN_INPUT_PAGE:
      return { ...state, isActiveInputPage: true }
    case Constants.CLOSE_INPUT_PAGE:
      return { ...state, isActiveInputPage: false }
    case Constants.OPEN_LIST_PAGE:
      return { ...state, isActiveListPage: true }
    case Constants.CLOSE_LIST_PAGE:
      return { ...state, isActiveListPage: false }
    case Constants.OPEN_SLIDER_PAGE:
      return { ...state, isActiveSliderPage: true }
    case Constants.CLOSE_SLIDER_PAGE:
      return { ...state, isActiveSliderPage: false }
    case Constants.OPEN_UPLOAD_PAGE:
      return { ...state, isActiveUploadPage: true }
    case Constants.CLOSE_UPLOAD_PAGE:
      return { ...state, isActiveUploadPage: false }
    default:
      return state;
  }
}
