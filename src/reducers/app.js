const app = (state = {
    menuDrawer: false
},action) => {
    switch(action.type){
        case 'TOGGLE_MENU_DRAWER' : 
            return {  menuDrawer: !state.menuDrawer}
        default:
            return state
    }
}

export default app;