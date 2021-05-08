/*
    App : Password Generator
    Password generator is a command line application that generates random valid password of fixed length provided by the user.
    Feature:
        Generates Random Valid Password

    1. Takes Valid length input from user
    2. Generates Password and Return it to user

*/
#include<iostream>
#include<set>
using namespace std;
class Password{
    private:
        int start,end;
        std::string password;
        set<std::string>hashPassword;
        std::set<std::string>::iterator it;
    public:
      Password(int *InputData);
      void getRandomPassword();
      std::string displayGeneratesPassword();
      bool checkDuplicate(std::string password);
};
//getter
Password::Password(int *InputData){
    start=InputData[0];
    end=InputData[1];
    getRandomPassword();
}

//Generate Password

void Password::getRandomPassword(){
    password="";
    const char *alphanum = "abcdefghijklmnopqrstuvwxyz!@#$%^&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int maxLength=sizeof(alphanum);
    srand(time(0));
    for(int i=0;i<end;i++){
        password+=alphanum[(rand() % maxLength)*start];
    }
    if(checkDuplicate(password)){
        getRandomPassword();
    }
    hashPassword.insert(password);
    
}
//Display
std::string Password::displayGeneratesPassword(){
    return password;
}

//check Duplicate
bool Password::checkDuplicate(std::string password){
    it=hashPassword.find(password);
    if(*it==password){
        return true;
    }
    return false;
}

//Define the input Structure
class input{
    private:
        int start,end;
    public:
        input();
        input(int start,int end);
        int* getInput();
};


//Define Input
input::input(){
    this->start=0x8;
    this->end=0xf;
}

//Setter
input::input(int start,int end){
    this->start=start;
    this->end=end;
}

//Getter
int* input::getInput(){
    int* readData = new int[2];
    readData[0]=this->start;
    readData[1]=this->end;
    return readData;
}



//main
int main(int argc, char* argv[]){
    input *data;
    if(argc>3){
        cout<<"You entered Alot of Params\nPass start and end of password\n";
        return 0;
    }else if(argc == 1 ){
        data=new input();
    }else{
        int s=stoi(argv[1]);
        int e=stoi(argv[2]);
        data=new input(s,e);
    }
    int *inputData=data->getInput();
    Password *pass = new Password(inputData);
    cout<<"Password: "<<pass->displayGeneratesPassword();
    cout<<"\n";
    delete pass;
    delete data;
    return 0;
}
