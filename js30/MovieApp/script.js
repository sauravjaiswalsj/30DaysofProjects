
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');

const count = document.querySelector('#count');
const cost = document.querySelector('#cost');
const movieSelect = document.getElementById('movie');
const getDataFromStorage = ()=>{
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length>0){
        seats.forEach((seats,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seats.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
getDataFromStorage();

let ticketPrice = parseInt(movieSelect.value);

const setMovieData = (movieIndex,moviePrice)=>{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

const updateSelectedCount = ()=>{
    const selectedSeats  = document.querySelectorAll('.row .seat.selected');
     const seatsIndex = [...selectedSeats].map(seat=>[...seats].indexOf(seat));
     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const countSeat = selectedSeats.length;
    count.innerHTML = countSeat;
    cost.innerHTML = countSeat * ticketPrice;
}
movieSelect.addEventListener('change', e=>{
    setMovieData(e.target.selectedIndex, e.target.value);
    ticketPrice=+e.target.value;
    updateSelectedCount();
});
container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

updateSelectedCount();