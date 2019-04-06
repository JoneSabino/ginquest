import ptBR from './pt-BR';
import enUS from './en-US';

it('Has all the translations in both languages', () => {
    const ptBRArray = [];
    const enUSArray = [];

    for (const property of Object.keys(ptBR.translation)) {
        ptBRArray.push(property);
    }
    for (const property of Object.keys(enUS.translation)) {
        enUSArray.push(property);
    }
    ptBRArray.sort();
    enUSArray.sort();
    expect(ptBRArray).toEqual(enUSArray);
});
