export type UsersProps = {
    id: number,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    username: string, 
    isSeller: boolean
}

export type MotorbikeProps = {
    id: number,
    photo: string,
    name: string,
    motorcycle_brand: 'Honda' | 'Yamaha' | 'Harley-Davidson',
    price: number,
    engine_capacity: number,
    type: 'Custom' | 'Sport' | 'Scooter',
    description: string
}

export type TypesMessagesAlertsProps = 'success' | 'warning' | 'info' | 'error';
export type MotorcycleBrandProps = 'Honda' | 'Yamaha' | 'Harley-Davidson';
export type TypesMotorbikeProps = 'Custom' | 'Sport' | 'Scooter';
