class UnionFind {
    private parent: number[];
    private rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.rank = new Array(n + 1).fill(1);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false; // Cycle detected

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
        }

        return true;
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const uf = new UnionFind(n);

    for (const [a, b] of edges) {
        if (!uf.union(a, b)) return [a, b]; // If union fails, this edge is redundant
    }

    return [];
};



// shorter 
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// var findRedundantConnection = function(edges) {
//     let par = Array.from({length: edges.length + 1}, (_,i) => i);
    
//     const find = (x) => (x === par[x] ? par[x] : par[x] = find(par[x]));
//     const union = (x,y) => (par[x] = y);

//     for (let [a,b] of edges){
//         let findA = find(a);
//         let findB = find(b);

//         if (findA === findB) return [a,b];
//         union(findA, findB);
//     }
// };