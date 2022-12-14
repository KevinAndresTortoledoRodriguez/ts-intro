interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles: {autor, anio}} = reproductor

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [ goku, vegeta, trunks] = dbz

console.log('Personaje 1: ', goku)
console.log('Personaje 2: ', vegeta)
console.log('Personaje 3: ', trunks)