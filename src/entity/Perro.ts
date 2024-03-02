import { Column, Entity } from "typeorm";
import { Mascota } from "./Mascota";

@Entity()
export class Perro extends Mascota{
    
    @Column()
    raza: string
}