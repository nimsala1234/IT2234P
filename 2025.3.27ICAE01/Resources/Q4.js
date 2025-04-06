function HexSWC(decimal) {
    let hex;
    
    switch (decimal) {
        case 0: hex = '0'; break;
        case 1: hex = '1'; break;
        case 2: hex = '2'; break;
        case 3: hex = '3'; break;
        case 4: hex = '4'; break;
        case 5: hex = '5'; break;
        case 6: hex = '6'; break;
        case 7: hex = '7'; break;
        case 8: hex = '8'; break;
        case 9: hex = '9'; break;
        case 10: hex = 'A'; break;
        case 11: hex = 'B'; break;
        case 12: hex = 'C'; break;
        case 13: hex = 'D'; break;
        case 14: hex = 'E'; break;
        case 15: hex = 'F'; break;
    }
    
    return hex;
}