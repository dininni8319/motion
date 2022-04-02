
export function sliceLetter(str){
    return  str?.split('').slice(0, 1);
};

export function formatDate(date){
    let time = new Date(date);
    let timeNow = new Date().getDay();

    let day = time.getDay();
    let hours = time.getHours();

    let minutes = time.getMinutes();
    return ` ${day === timeNow ? 'Today' : 'Yesterday'} ${
        hours < 10 ? '0' + hours : hours
    }:${minutes < 10 ? '0' + minutes : minutes}`;
};