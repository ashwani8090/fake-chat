import { createSlice } from '@reduxjs/toolkit'
const profileImage1 = "https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png";
const profileImage2 = "https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"

export const INITIAL_PERSISTED_STATE = {
    userDetails: {
        name: "Ashwani Thakur",
        designation: "Web Developer",
        isActive: false,
        profileImage: "https://banner2.cleanpng.com/20180713/ig/kisspng-user-profile-linkedin-netwerk-money-order-fulfillm-round-face-5b4944092212b3.5336384915315282011396.jpg"
    },
    accessToken: null,
    activeUsers: [
        { id: '1', name: 'Henry Boyd', profileImage: profileImage2, email: 'henry@yopmail' },
        { id: '2', name: 'Martha Curtis', profileImage: profileImage2, email: 'martha@yopmail' },
        { id: '3', name: 'Phillip Tucker', profileImage: profileImage1, email: 'phillip@yopmail' },
        { id: '4', name: 'Ethan Hunt', profileImage: profileImage2, email: 'ethan@yopmail' },
        { id: '5', name: 'John', profileImage: profileImage2, email: 'john@yopmail' },
    ],
    archivedUsers: [

    ],
    activeConversations: []
}

export const persistedSlice = createSlice({
    name: 'persistedSlice',
    initialState: INITIAL_PERSISTED_STATE,
    reducers: {
        setUserDetails: (state, action) => { state.userDetails = action.payload },
        setAccessToken: (state, action) => { state.accessToken = action.payload },
        setActiveUsers: (state, action) => { state.activeUsers = action.payload },
        setArchivedUsers: (state, action) => { state.archivedUsers = action.payload },
        setConversations: (state, action) => { state.activeConversations = action.payload }
    }
})

// Action creators are generated for each case reducer function
export const {
    setUserDetails,
    setAccessToken,
    setActiveUsers,
    setArchivedUsers,
    setConversations } =
    persistedSlice.actions

export default persistedSlice.reducer