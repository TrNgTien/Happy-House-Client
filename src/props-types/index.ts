export interface IRow {
    id: number;
    roomName: string;
    roomCharge: number;
    electricity: {
        previousNumber: number;
        currentNumber: number;
    };
    water: {
        previousNumber: number;
        currentNumber: number;
    };
    internet: {
        isUsed: boolean;
        price: number;
    };
    services: {
        isUsed: boolean;
        description: string[];
        price: number;
    };
}

export interface TableDataProps {
    readonly value: unknown;
}