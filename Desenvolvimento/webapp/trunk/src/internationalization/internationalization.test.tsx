import ptBR from './pt-BR';
import enUS from './en-US';

it('Has all the translations in both languages', () => {
    var ptBRArray = [];
    var enUSArray = [];

    for (var property in ptBR.translation) {
        ptBRArray.push(property);
    }
    for (var property in enUS.translation) {
        enUSArray.push(property);
    }
    ptBRArray.sort();
    enUSArray.sort();
    expect(ptBRArray).toEqual(enUSArray);
});
