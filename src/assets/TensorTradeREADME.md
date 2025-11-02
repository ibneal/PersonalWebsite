# 🧠 TensorTradeGMI

**Reinforcement Learning System for GMI-Based Trading on TQQQ/SQQQ**

TensorTradeGMI is a sophisticated RL-powered trading system that learns optimal entry, exit, pyramiding, and position management strategies based on the GMI (General Market Indicator) trend framework.

The system uses a **dual-ticker approach**: TQQQ (3x long) during green trends and SQQQ (3x inverse) during red trends, allowing it to profit from both bullish and bearish market conditions.

---

## 🚀 Features

- **Dual-Ticker Strategy**: Automatically switches between TQQQ (green trends) and SQQQ (red trends)
- **GMI Trend Integration**: Connects to PostgreSQL GMI database to track market trends
- **Market Data Pipeline**: Fetches OHLCV and VIX data via Polygon.io API
- **RL Environment**: Custom Gymnasium environment for position tier management
- **Multiple RL Algorithms**: Supports PPO, DQN, and A2C agents
- **Backtest Optimization**: Grid search and walk-forward analysis
- **Performance Metrics**: Comprehensive evaluation with Sharpe, Sortino, Calmar ratios
- **Visualization**: Charts for portfolio performance, trades, and GMI states

---

## 📁 Project Structure

```
TensorTradeGMI/
├── data/                   # Data pipeline modules
│   ├── gmi_client.py      # PostgreSQL GMI data fetcher
│   ├── polygon_client.py  # Polygon.io market data
│   ├── feature_engineering.py  # Technical indicators
│   └── data_loader.py     # Integrated data loader
│
├── envs/                   # RL Environments
│   └── GMIDailyEnv.py     # Daily position management environment
│
├── agents/                 # RL Agent training & evaluation
│   ├── train_daily_agent.py    # Training script
│   └── evaluate_agent.py       # Evaluation & backtesting
│
├── analysis/               # Analysis tools
│   └── backtest_optimizer.py   # Parameter optimization
│
├── config/                 # Configuration files
│   └── config.ini         # Database & API credentials
│
├── models/                 # Saved trained models
├── logs/                   # Tensorboard logs
├── results/                # Backtest results
├── notebooks/              # Jupyter notebooks
├── tests/                  # Unit tests
│
├── main.py                # Main entry point
├── requirements.txt       # Python dependencies
└── README.md             # This file
```

---

## 🔧 Installation

### Prerequisites

- Python 3.8+
- PostgreSQL database with GMI data
- Polygon.io API key

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/TensorTradeGMI.git
   cd TensorTradeGMI
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure credentials**:
   
   Edit `config.ini` with your database and API credentials:
   ```ini
   [database]
   host = localhost
   port = 5432
   user = postgres
   password = yourpassword
   database = gmi
   
   [polygon]
   api_key = YOUR_POLYGON_API_KEY
   ```

---

## 🎯 Quick Start

### 1. Load Data

Fetch and prepare historical data (dual-ticker mode by default):

```bash
# Load both TQQQ and SQQQ (recommended)
python main.py load-data --start-date 2024-01-01 --end-date 2025-10-17

# Or load a single ticker
python main.py load-data --ticker TQQQ --dual-ticker false
```

### 2. Test Environment

Verify the environment works correctly:

```bash
# Test with dual-ticker data
python main.py test-env
```

### 3. Train an Agent

Train a PPO agent (uses both TQQQ and SQQQ):

```bash
# Train with dual-ticker strategy (default)
python main.py train --algorithm PPO --timesteps 100000

# Or train on single ticker
python main.py train --ticker TQQQ --dual-ticker false --timesteps 100000
```

Monitor training progress:
```bash
tensorboard --logdir logs
```

### 4. Evaluate Agent

Backtest a trained agent:

```bash
python main.py evaluate --model-path models/PPO_TQQQ_final --ticker TQQQ --plot
```

### 5. Run Parameter Optimization

Find optimal parameters via grid search:

```bash
python main.py optimize --ticker TQQQ --start-date 2024-01-01
```

Or run walk-forward analysis:

```bash
python main.py optimize --ticker TQQQ --walk-forward
```

---

## 🧠 RL Environment Details

### State Space
```
[gmi_state, ma_ratio_10d, ma_ratio_10w, vix_norm, position_tier, 
 momentum_10d, volatility_10d, trend_duration]
```

### Action Space
- **0**: Hold (no action)
- **1**: Add Tier (pyramid into position)
- **2**: Trim Tier (reduce position)
- **3**: Exit Position (close all)

### Reward Function
```python
reward = portfolio_value_change - transaction_costs
```

---

## 📊 Command Reference

### Load Data
```bash
python main.py load-data [OPTIONS]

Options:
  --ticker TEXT         Ticker symbol (default: TQQQ)
  --start-date TEXT     Start date YYYY-MM-DD (default: 2024-01-01)
  --end-date TEXT       End date YYYY-MM-DD (default: 2025-10-17)
  --trend-rule INT      GMI trend rule: 1, 2, or 3 days (default: 2)
  --output TEXT         Output file path
```

### Train Agent
```bash
python main.py train [OPTIONS]

Options:
  --ticker TEXT         Ticker symbol
  --algorithm TEXT      RL algorithm: PPO, DQN, A2C (default: PPO)
  --timesteps INT       Total training timesteps (default: 100000)
  --learning-rate FLOAT Learning rate (default: 3e-4)
  --max-tiers INT       Max position tiers (default: 5)
  --tier-size FLOAT     Tier size as % of capital (default: 0.20)
```

### Evaluate Agent
```bash
python main.py evaluate [OPTIONS]

Options:
  --model-path TEXT     Path to trained model (required)
  --algorithm TEXT      Algorithm type: PPO, DQN, A2C
  --ticker TEXT         Ticker symbol
  --plot               Generate performance charts
```

### Optimize Parameters
```bash
python main.py optimize [OPTIONS]

Options:
  --ticker TEXT         Ticker symbol
  --walk-forward       Run walk-forward analysis
  --output-dir TEXT    Output directory for results (default: results)
```

---

## 📈 Performance Metrics

The system calculates comprehensive performance metrics:

- **Total Return**: Overall portfolio return
- **CAGR**: Compound Annual Growth Rate
- **Sharpe Ratio**: Risk-adjusted return
- **Sortino Ratio**: Downside risk-adjusted return
- **Calmar Ratio**: Return / Max Drawdown
- **Max Drawdown**: Largest peak-to-trough decline
- **Win Rate**: Percentage of profitable periods
- **Profit Factor**: Gross profit / Gross loss

---

## 🧪 Development

### Running Tests
```bash
pytest tests/
```

### Code Style
```bash
black .
flake8 .
```

---

## 🗺️ Roadmap

- [x] Phase 1: Data pipeline implementation
- [x] Phase 2: RL environment development
- [x] Phase 3: Agent training framework
- [x] Phase 4: Backtest optimization system
- [ ] Phase 5: Intraday refinement layer (5m/15m/1h)
- [ ] Phase 6: Live paper trading deployment
- [ ] Phase 7: Production trading system

---

## 📝 Configuration

### Environment Parameters

Customize in `envs/GMIDailyEnv.py` or via command-line:

- `initial_capital`: Starting capital (default: $100,000)
- `max_tiers`: Maximum position tiers (default: 5)
- `tier_size_pct`: % of capital per tier (default: 0.20)
- `transaction_cost`: Fee per trade (default: 0.0002 = 0.02%)
- `trend_stop`: Exit all on trend flip (default: True)

### Optimization Parameters

Edit `BACKTEST_PARAMS` in `analysis/backtest_optimizer.py`:

```python
BACKTEST_PARAMS = {
    'trend_rule': [2, 3],
    'max_tiers': [3, 4, 5],
    'tier_size_pct': [0.20, 0.25, 0.33],
    'stop_loss_pct': [None, 0.05, 0.07, 0.10],
    'profit_target': [None, 0.05, 0.07, 0.10],
    'trend_stop': [True, False],
}
```

---

## 🔍 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running: `pg_isready`
- Check credentials in `config.ini`
- Ensure GMI database and table exist

### Polygon API Errors
- Verify API key is valid
- Check rate limits (free tier: 5 calls/min)
- Ensure ticker symbol is correct

### CUDA/GPU Issues
- Install PyTorch with CUDA support: `pip install torch --index-url https://download.pytorch.org/whl/cu118`
- Verify GPU availability: `python -c "import torch; print(torch.cuda.is_available())"`

---

## 📚 Resources

- [Stable-Baselines3 Documentation](https://stable-baselines3.readthedocs.io/)
- [Gymnasium Documentation](https://gymnasium.farama.org/)
- [Polygon.io API Docs](https://polygon.io/docs/)

---

## 👨‍💻 Author

**Neal Bhalodia**  
October 2025  
Version 1.0

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- GMI System for trend framework
- Stable-Baselines3 for RL implementations
- Polygon.io for market data

---

**Happy Trading! 📈🤖**

