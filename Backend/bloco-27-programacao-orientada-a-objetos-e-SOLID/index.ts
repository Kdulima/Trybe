//Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class student {
  private _enroll: string;
  private _name: string = String();
  private _test: number[];
  private _work: number[];

  constructor(enroll: string, name: string) {
    this._enroll = enroll;
    this._name = name;
    this._test = [];
    this._work = [];
  }
  
  get enroll(): string {
    return this._enroll;
  }

  set enroll(value: string) {
    this._enroll = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres!');
    }

    this._name = value;
  }

  get test(): number[] {
    return this._test;
  }

  set test(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode possuir 4 notas de provas.');
    }

    this._test = value;
  }

  get work(): number[] {
    return this._work;
  }

  set work(value: number[]) {
    if (value.length > 2) {
      throw new Error('O estudante só pode possuir 2 notas de trabalho.');
    }

    this._work = value;
  }
}