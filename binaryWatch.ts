function readBinaryWatch(turnedOn: number): string[] {
    const result: string[] = [];
    
    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            if (countBits(hour) + countBits(minute) === turnedOn) {
                result.push(`${hour}:${minute.toString().padStart(2, '0')}`);
            }
        }
    }
    
    return result;
}

function countBits(num: number): number {
    return num.toString(2).split('1').length - 1;
}