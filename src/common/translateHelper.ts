function translateKey(value: string): string {
  const keys: any = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_pelo',
    skin_color: 'color_piel',
    eye_color: 'color_ojo',
    birth_year: 'aniversario',
    gender: 'tipo',
    created: 'fecha_fundado',
  };

  return keys[value];
}

export { translateKey };
