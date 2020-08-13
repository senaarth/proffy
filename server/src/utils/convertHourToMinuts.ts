export default function convertHourToMinuts(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinuts = (hour * 60) + minutes;
    return timeInMinuts;
}