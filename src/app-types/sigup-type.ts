export interface RegisterResponse {
    status:  string;
    message: string;
    data:    Data;
}

export interface Data {
    user: User;
}

export interface User {
    name:       string;
    email:      string;
    dob:        null;
    updated_at: Date;
    created_at: Date;
    id:         number;
}

export interface RegisterErrorResponse {
    message:     string;
    errors:      Errors;
    status_code: number;
}

export interface Errors {
    email: string[];
}


// Path: src/app-types/profile-update.type.ts