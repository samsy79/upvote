// src/types.ts
export type Board = {
    id: Number;
    title: string;
    createdAt: Date;
    // Add other properties as necessary
  };
  export type Proposition = {
    id   :   Number   ; 
  title :    string ;
  createdAt: Date; 
  ip      :  String ;
  boardid :Number;
    // Add other properties as necessary
  };

  export type Vote ={
    id   :   Number   ; 
  createdAt: Date; 
  ip      :  String ;
  propositionid :Number;
  }
  