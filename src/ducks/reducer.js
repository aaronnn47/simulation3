const initialState={
    username: '',
    password: '',
    title: '',
    image_url: '',
    content: ''
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_TITLE = 'UPDATE_TITLE'
const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL'
const UPDATE_CONTENT = 'UPDATE_CONTENT'

export function updateUsername(username){
    return{
        type:UPDATE_USERNAME,
        payload: username
    }
}

export function updatePassword(password){
    return{
        type:UPDATE_PASSWORD,
        payload: password
    }
}

export function updateTitle(title){
    return{
        type: UPDATE_TITLE,
        payload: title
    }
}

export function updateImageUrl(image_url){
    return{
        type: UPDATE_IMAGE_URL,
        payload: image_url
    }
}

export function updateContent(content){
    return{
        type: UPDATE_CONTENT,
        payload: content
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
        return Object.assign({},state, {username: action.payload})
        case UPDATE_PASSWORD:
        return Object.assign({},state, {password: action.payload})
        case UPDATE_TITLE:
        return Object.assign({},state, {title: action.payload})
        case UPDATE_IMAGE_URL:
        return Object.assign({},state, {image_url: action.payload})
        case UPDATE_CONTENT:
        return Object.assign({},state, {content: action.payload})
        default:
        return state
    }
}