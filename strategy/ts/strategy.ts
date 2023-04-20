interface Istrategy {
    login(user: string, password: string): boolean;
}

class LoginContext {

    private strategy: Istrategy;

    constructor(strategy: Istrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Istrategy) {
        this.strategy = strategy;
    }

    public login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDB implements Istrategy {
    login(user: string, password: string){
        console.log('login with DB');
        if(user === 'admin' && password === 'admin'){
           return true
        }
        return false;
    }  
}

class LoginGoogleStrategy implements Istrategy {
    login(user: string, password: string){
        console.log('login with Google');
        if(user === 'admin' && password === 'admin'){
           return true
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDB());
auth.login("admin", "admin");
auth.setStrategy(new LoginGoogleStrategy());
auth.login("admin", "admin");