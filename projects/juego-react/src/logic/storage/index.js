export const saveGameToStorage = ({board, turn}) => {
    window.localStorage.setItem('board',JSON.stringify(board)) //Guarda el tablero
    window.localStorage.setItem('turn', turn) //Guarda el turno en local
}


export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}