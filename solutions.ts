const multiplyValue = (value:number, multiplier?:number) => {
    const actualMultiplier = multiplier ?? 2;

    return value * actualMultiplier;
}






const processInput = (value: string | number | boolean) : string | number => {

    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }

    else if (typeof value === "number"){
        return value * 10;
    }

    else{
        return value ? "Active" : "Inactive";
    }
}







const formatCoordinate = (coordinate: readonly[number, number, string]): string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}







const concatenateArrays = <T>(...arrays: T[][]): T[] =>{
    return arrays.flat();
};







interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses=(courses: Course[], minStudents: number): Course[] =>{
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
};









const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {

    return items.map((item) => {
        return item[key];
    });

};












class Employee {

    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails = (): string => {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    };

}

class Manager extends Employee {

    private department: string;

    constructor(
        name: string,
        baseSalary: number,
        department: string
    ) {

        super(name, baseSalary);

        this.department = department;

    }

    getRoleInfo = (): string => {
        return `Manager of ${this.department}: ${this.name}`;
    };

}










const validateAgeAsync = (age: number): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        if (age >= 18) {

            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);

        } else {

            reject(new Error("Access Denied: Must be 18 or older"));

        }

    });

};

const input1 = async (): Promise<string> => {

    const result = await validateAgeAsync(20);

    return result;

};

const input2 = async (): Promise<string> => {

    try {

        const result = await validateAgeAsync(15);

        return result;

    } catch (error) {

        if (error instanceof Error) {
            return error.message;
        }

        return "An unknown error occurred";

    }

};