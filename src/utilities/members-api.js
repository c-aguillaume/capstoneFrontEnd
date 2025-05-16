 export async function getMembers() {
      try {
       const response = await fetch('http://localhost:8000/api/v1/members');
       const data = await response.json();
       return data
      } catch (error) {
        console.error(error);
      }
    }
  