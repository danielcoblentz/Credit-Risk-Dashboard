### 2. Configure Environment Variables

Create a `.env` file in the project root (this file is gitignored):

```bash
DATABASE_URL=jdbc:postgresql://<HOST>:<PORT>/credit-db
DATABASE_USERNAME=<your_username>
DATABASE_PASSWORD=<your_password>
```

**Example for local PostgreSQL:**
```bash
DATABASE_URL=jdbc:postgresql://localhost:5432/credit-db
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=yourpassword
```

**Example for remote PostgreSQL:**
```bash
DATABASE_URL=jdbc:postgresql://192.168.1.100:5432/credit-db
DATABASE_USERNAME=myuser
DATABASE_PASSWORD=mypassword
```

### 3. PostgreSQL Remote Connection Setup (if connecting from another machine)

If your database is on a different machine, configure PostgreSQL to accept remote connections:

1. Edit `postgresql.conf`:
   ```
   listen_addresses = '*'
   ```

2. Edit `pg_hba.conf` - add this line:
   ```
   host    all    all    0.0.0.0/0    md5
   ```

3. Restart PostgreSQL:
   ```bash
   # macOS with Homebrew
   brew services restart postgresql@14

   # Linux
   sudo systemctl restart postgresql
   ```

4. Set a password for your database user:
   ```sql
   ALTER USER your_username WITH PASSWORD 'your_password';
   ```

## Running the Application

### Option 1: Using Environment Variables (Recommended)

**Windows (Command Prompt):**
```cmd
set DATABASE_URL=jdbc:postgresql://localhost:5432/credit-db
set DATABASE_USERNAME=postgres
set DATABASE_PASSWORD=yourpassword
mvnw.cmd spring-boot:run
```

**Windows (PowerShell):**
```powershell
$env:DATABASE_URL="jdbc:postgresql://localhost:5432/credit-db"
$env:DATABASE_USERNAME="postgres"
$env:DATABASE_PASSWORD="yourpassword"
./mvnw.cmd spring-boot:run
```

**macOS/Linux:**
```bash
export DATABASE_URL="jdbc:postgresql://localhost:5432/credit-db"
export DATABASE_USERNAME="postgres"
export DATABASE_PASSWORD="yourpassword"
./mvnw spring-boot:run
```

### Option 2: Using a Script

Create a `run.sh` (macOS/Linux) or `run.cmd` (Windows) script with your environment variables.

## API Endpoints

Once running, the server will be available at `http://localhost:8080`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/risk/calculate` | Calculate risk score for a loan request |
| POST | `/api/risk/applications` | Save a new loan application |
| GET | `/api/risk/applications` | Get all loan applications |
| GET | `/api/risk/stats/summary` | Get dashboard summary statistics |

### Example: Calculate Risk

```bash
curl -X POST http://localhost:8080/api/risk/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "borrowerName": "John Doe",
    "monthlyIncome": 5000,
    "monthlyDebt": 1500,
    "loanAmount": 25000,
    "collateralValue": 30000
  }'
```

### Example: Save Application

```bash
curl -X POST http://localhost:8080/api/risk/applications \
  -H "Content-Type: application/json" \
  -d '{
    "borrowerName": "John Doe",
    "monthlyIncome": 5000,
    "monthlyDebt": 1500,
    "loanAmount": 25000,
    "collateralValue": 30000
  }'
```

## Running Tests

```bash
./mvnw test
```

## Test Coverage

```bash
./mvnw test jacoco:report
```

Coverage report will be generated at: `target/site/jacoco/index.html`
