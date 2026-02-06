
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
}

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

<<<<<<< HEAD
  @Column()
=======
  @Column({ nullable: true })
>>>>>>> 7b778e8 (Add Google OAuth login with JWT authentication)
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PATIENT,
  })
  role: UserRole;
<<<<<<< HEAD
=======


@Column({ nullable: true })
googleId: string;

@Column({ nullable: true })
picture: string;

>>>>>>> 7b778e8 (Add Google OAuth login with JWT authentication)
}
