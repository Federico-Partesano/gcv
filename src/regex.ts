export const hasContainSpace = (str: string) => /\s/g.test(str);
  
export const hasContainSimbol = (str: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);
  