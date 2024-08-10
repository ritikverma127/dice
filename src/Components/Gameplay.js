function Gameplay() {
  return (
    <>
      <div className="r1">
        <div className="r2">
          <h1 >0</h1>
          <p style={{ fontSize: "25px" }}>TOTAL SCORE</p>
        </div>
        <div className="r3">
          <table>
            <tr>
              <th><button>1</button></th>
              <th><button>2</button></th>
              <th><button>3</button></th>
              <th><button>4</button></th>
              <th><button>5</button></th>
            </tr>
          </table>
        </div>


      </div><br />
      <div>
        <form>
          <input type="text" /><br /><br />
          <input type="text" /><br /><br />
          <input type="submit" value="Check" />
        </form>
      </div>
    </>

  )
}

export default Gameplay;
