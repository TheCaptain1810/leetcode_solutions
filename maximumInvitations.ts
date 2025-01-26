function maximumInvitations(favorite: number[]): number {
    const n: number = favorite.length;
    const reversedGraph: number[][] = Array.from({ length: n }, () => []);

    // Create reversed graph
    for (let person = 0; person < n; ++person) {
        reversedGraph[favorite[person]].push(person);
    }

    // Helper function for BFS
    const bfs = (startNode: number, visitedNodes: Set<number>): number => {
        const queue: [number, number][] = [[startNode, 0]];
        let maxDistance = 0;

        while (queue.length > 0) {
            const [currentNode, currentDistance] = queue.shift()!;

            for (const neighbor of reversedGraph[currentNode]) {
                if (visitedNodes.has(neighbor)) continue;
                visitedNodes.add(neighbor);
                queue.push([neighbor, currentDistance + 1]);
                maxDistance = Math.max(maxDistance, currentDistance + 1);
            }
        }
        return maxDistance;
    };

    let longestCycle = 0;
    let twoCycleInvitations = 0;
    const visited: boolean[] = Array(n).fill(false);

    // Find all cycles
    for (let person = 0; person < n; ++person) {
        if (!visited[person]) {
            const visitedPersons: Map<number, number> = new Map();
            let current = person;
            let distance = 0;

            while (true) {
                if (visited[current]) break;
                visited[current] = true;
                visitedPersons.set(current, distance++);
                const nextPerson = favorite[current];

                if (visitedPersons.has(nextPerson)) { // Cycle detected
                    const cycleLength = distance - visitedPersons.get(nextPerson)!;
                    longestCycle = Math.max(longestCycle, cycleLength);

                    if (cycleLength === 2) {
                        const visitedNodes = new Set<number>([current, nextPerson]);
                        twoCycleInvitations += 
                            2 + bfs(nextPerson, visitedNodes) + bfs(current, visitedNodes);
                    }
                    break;
                }

                current = nextPerson;
            }
        }
    }

    return Math.max(longestCycle, twoCycleInvitations);
};