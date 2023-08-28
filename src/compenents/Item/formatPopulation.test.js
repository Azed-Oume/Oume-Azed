


    import formatPopulation from "./formatPopulation.js"; // Assurez-vous du chemin correct

    describe("formatPopulation", () => {
        test("Pour une population d'un million d'habitants, retourner le nombre divisé par 1 million, avec une virgule comme marqueur de décimal et le caractère M", () => {
            expect(formatPopulation(1000000)).toBe("1,000 M d'habitants");
        });
        test("Pour une population de plus d'un million d'habitants, retourner le nombre divisé par 1 million, avec une virgule comme marqueur de décimal et le caractère M", () => {
            expect(formatPopulation(2500000)).toBe("2,500 M d'habitants");
        });
    
        test("Pour une population de 1000 habitants , retourner le nombre divisé par 1000, avec une virgule comme marqueur de décimal et le caractère K", () => {
            expect(formatPopulation(1000)).toBe("1,000 K d'habitants");
        });
        test("Pour une population maximum de 999999 habitants et moins d'un million, retourner le nombre divisé par 1000, avec une virgule comme marqueur de décimal et le caractère K", () => {
            expect(formatPopulation(999999)).toBe("999,999 K d'habitants");
        });
    
        test("Pour une population de 0 habitants, retourner le nombre d'habitants inchangé", () => {
            expect(formatPopulation(0)).toBe("0 habitants");
        });
        test("Pour une population inférieure à 1000 habitants, retourner le nombre d'habitants inchangé", () => {
            expect(formatPopulation(999)).toBe("999 habitants");
        });
        test("pour une ville sans population",() => {
            expect(formatPopulation(isNaN)).toBe("N/A");
        });

    });
    
    

